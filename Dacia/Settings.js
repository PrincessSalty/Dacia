import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, Color } from 'Vigilance';


@Vigilant("Dacia", "§9Dacia")
class Settings {

    @SwitchProperty({
        name: "wardrobe swap",
        description: "use number keys to swap armor",
        category: "",
        subcategory: ""
    })
    swap = false;

    @SwitchProperty({
        name: "party finder kick",
        description: "use /dckick to kick the most recent player",
        category: "",
        subcategory: ""
    })
    swap = false;


    
    
    constructor() {
        this.initialize(this)
    }
}

export default new Settings();