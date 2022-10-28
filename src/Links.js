import Linker from "./Link";

const Links = () => {
    return ( 
        <section className="links_section">
            <Linker name='@itz_vipez' id='twitter' link='https://training.zuri.team/' />
            <Linker name='Zuri Team' id='btn__zuri' link='http://books.zuri.team' />
            <Linker name='Zuri Books' id='books' link='http://books.zuri.team' />
            <Linker name='Python Books' id='book__python' link='https://books.zuri.team/python-for-beginners?ref_id=' />
            <Linker name='Zuri Team' id='pitch' link='http://books.zuri.team' />
            <Linker name='Zuri Books' id='book__design' link='https://books.zuri.team/' />
        </section>
     );
}
 
export default Links;