function Poster(props){
    return(
        <>
        <div className="container-fluid bg-dark">
             <img src={props.img} alt="poster" className="w-100" />
        </div>
        </>
    )
}
export default Poster;