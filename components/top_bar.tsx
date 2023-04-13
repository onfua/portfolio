import React from 'react'
import styles from '../styles/top_bar.module.scss'
import anime from 'animejs'

export default class TopBar extends React.Component{
    props : any;
    state : {active : boolean};
    buttons : any;
    logo : any;

    constructor(props : any){
        super(props);
        this.state = {
            active : false
        }
    }

    componentDidMount(): void {
        //animate the head in name
        anime({
            targets : this.logo,
            loop : true,
            duration : 5000,
            keyframes : [
                {
                    width : 40,
                    height : 40
                },
                {
                    width : 45,
                    height : 45
                },
                {
                    rotateZ : 360
                },
                {
                    width : 40,
                    height : 40
                }
            ]
        })
    }

    render() : React.ReactNode{
        return (
            <div className={styles.topBar}>
                <div className={styles.nameContent} onClick={()=>this.changeMenu(undefined)}>
                    <img src="./images/head.png" alt="Picture of a little head" ref={(e : any)=>this.logo = e}/>
                    <h1>Randrianarivelo Joël</h1>
                </div>
                <div className={styles.navButton}>
                    <button className={this.isSelected('portfolio')} onClick={()=>this.changeMenu('portfolio')}>Portfolio</button>
                    <button className={this.isSelected('contact')} onClick={()=>this.changeMenu('contact')}>Contact</button>
                    <button className={this.isSelected('about')} onClick={()=>this.changeMenu('about')}>About</button>
                </div>
                <div className={styles.navButtonMobile}>
                    <button><img src="./images/menu.png" alt="icon menu" onClick={()=>{
                        const {active} = this.state
                        this.setState({active : !active})
                        if (active) this.buttons?.classList.remove(styles.active); else this.buttons?.classList.add(styles.active);  
                    }}/></button>
                    <div className={styles.buttons} ref={(e : any)=>this.buttons = e}>
                        <button className={this.isSelected('portfolio')} onClick={()=>this.changeMenu('portfolio')}>Portfolio</button>
                        <button className={this.isSelected('contact')} onClick={()=>this.changeMenu('contact')}>Contact</button>
                        <button className={this.isSelected('about')} onClick={()=>this.changeMenu('about')}>About</button>
                    </div>
                    
                </div>
            </div>
        )
    }
    
    //a function to determinate if a menu-item is selected
    isSelected(e : string | undefined) : string{
        const {menu} = this.props
        if (e?.trim().toLowerCase() === menu?.trim().toLowerCase()) return styles.selected
        return ''
    }

    //a function that bind a menu state to the main component
    changeMenu(s : string | undefined){
        const {changeMenu} = this.props
        changeMenu(s);
    }
}