import '../btnGitHub/style.css'
import icon from './../../img/icons/vercel.svg'

const BtnVercel = ( {link} ) => {
    // console.log(link);
    return (
        <a href={link} rel="noreferrer" target='_blank' className="btn-outline">
            <img width={10} height={10} src={icon} alt=""/>
            Vercel repo
        </a>
    );
}

export default BtnVercel;