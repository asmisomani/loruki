import classes from '../Cards/Cards.module.css'
function Cards(props){
    return <div className={classes.cards}>{props.children}</div>
}
export default Cards
