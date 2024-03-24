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
