# Build image
```
docker build --platform linux/amd64 -t silentimp/newspaper . 
docker push silentimp/newspaper
```

# Run server
```
docker run -p 127.0.0.1:3000:3000/tcp silentimp/newspaper
open http://127.0.0.1:3000
```

# Extra miles, notes and trade-offs
- Any sorting or pagination should be in a real-case scenario conducted on the backend side, so it should be moved into the REST API endpoint. In that case, I would probably drop context and add a request to get data in container components of TopNews and TimeLine components.
- There was a requirement to change the amount of news on the page depending on the viewport size. After clarifying the requirements, I was advised to use my fair judgment. My decision was not to implement this. Reasons:
  + In the case of newspapers, it's important to deliver content as soon as possible. 
  + To do so, I decided to use server-side rendering.
  + We need to find out the customer's viewport resolution during the first request. While we do have client hints for [Viewport-Height](https://developer.mozilla.org/en-US/search?q=Viewport-Height) and [Viewport-Width](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Viewport-Width), they are deprecated, and we can't rely on them.
  + If we had different amount of news rendered on the server and client side, it would cause a layout shift, which is not a good user experience. 
  + Ideally, keeping in mind good UX, anything that happens after loading should be related to the customer's actions.
  + One possible exception is that we can have something like an event bus with Kafka or Rabbit; on the backend, we can listen to this bus for new events and then use [Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) to update TimeLine immediately as soon as a new news article is published. 
  + If I would still decide to fill the viewport with news, I would use [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for the single parent block of the news set. Or more simple [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) and add the news until the container is out of the viewport. To make this process less noticeable for the customer, I would possibly create a copy of the container, make it invisible to the user, figure out the amount of news I need to add and then add it in one go.
  + Possible middle-ground: check statistics on customer viewport sizes and calculate the amount of news that would work well on the percentile we need.
- I added a dark theme. You can change your OS preference to see it.
- To ensure we have same timezone on client and server used Europe/Amsterdam. It's challenging to get customer timezone during first request. Geolocation by ip can fail because of the proxy. And [client hints for the timezone](https://github.com/romulocintra/user-locale-client-hints/issues/17) has yet to arrive.
- Added Dockerfile. It's not optimized because of time constraints, but it does the job.
- I added publication to Docker Hub and deployment to the server. Available via [https://copy.frontender.info/](https://copy.frontender.info/).
