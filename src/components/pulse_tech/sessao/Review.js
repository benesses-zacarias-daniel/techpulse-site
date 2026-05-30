import style from "./Review.module.css"

const Review = ({ title, src }) => {
    return (
        <div className={style.area_videos}>
            <iframe className={style.iframe_reviews} allow="auto-play" src={src} title={title}>
            </iframe>
        </div>
    )
}

export default Review;
