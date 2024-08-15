import ImageCard from '../ImageCard/ImageCard';

interface ImageGalleryProps {
  items: {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
  }[];
  onImageClick: (imageUrl: string) => void;
}

export default function ImageGallery({ items, onImageClick }: ImageGalleryProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} >
          <ImageCard
            imageUrl={item.urls.small}
            altText={item.alt_description}
            onClick={() => onImageClick(item.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
}
