

const Linker = ({name, link, id}) => {
    return ( 
        <>
             <a href={link}><button id={id}>{name}</button></a>
             
        </>
     );
}
 
export default Linker;