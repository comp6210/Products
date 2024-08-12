function Header(title)
{
    const Title = title.Title;

    return(
        <div className="container mb-5">
            <h1 className="display-2">{Title}</h1>
        </div>
    )
}

export default Header;