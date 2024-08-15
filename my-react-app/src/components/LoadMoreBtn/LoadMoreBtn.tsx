import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

export default function LoadMoreBtn({ onLoadMore }: LoadMoreBtnProps) {
  return (
    <button onClick={onLoadMore} className={css.loadMoreBtn}>
      Load more
    </button>
  );
}
