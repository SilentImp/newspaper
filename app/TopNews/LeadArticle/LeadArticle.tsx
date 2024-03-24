import NewsEvent from "@/types/NewsEvent";
import Image from 'next/image';
import "./LeadArticle.css";

type LeadArticle = {
  article: NewsEvent;
};

const LeadArticle = ({article: {title}}: LeadArticle) => (
  <a className="top-article" href="#">
    <figure className="top-article__figure">
      <Image 
        alt={title}
        className="top-article__image"
        src="/dummy.avif"
        fill={true}
        priority={true}
        sizes="(max-width: 63rem) 100%, 37.34rem"
        />
      <figcaption className="top-article__caption">{title}</figcaption>
    </figure>
  </a>
);

export default LeadArticle;
