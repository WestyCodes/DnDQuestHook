import './footer.css'

export default function Footer() {
    return (
        <div className="footerBar">
            <div className='credit'>
                <span>Created by </span> 
                <a className="no-deco" href='https://github.com/WestyCodes' title='Created by WestyCodes'>Westy.</a>
            </div>
            <div className='githubRepo'>
                <span>Full repo can be found </span>
                <a className="no-deco" href='https://github.com/WestyCodes/DnDQuestHook' title='DnD Quest Hook Repot'>here.</a>
            </div>
            <div className='inspired'>
                <span>Inspired by </span>
                <a className="no-deco" href='http://twitter.com/ryanjgrant' title='Ryan J. Grant @ryanjgrant'>Ryan</a>
                <span> the creator of </span>
                <a className="no-deco" href='https://whothefuckismydndcharacter.com/' title='Who The Fuck Is My DND Character'>WTFIMDNDC</a>


            </div>
        </div>
    )
}