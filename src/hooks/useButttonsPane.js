import { paneTemplates } from "../globalConstants";

const useButtonsPane = (template) => {
    const buttonsPane = [];

    for (let i = 0; i < template.length; ++i){
        if (template == paneTemplates.navigation){
            const { key , icon, caption, route } = template[i];
            buttonsPane.push(
            <NavBarListItem key={ key } navbar_item_props={{
                icon: icon,
                caption: caption,
                route: route
            }}/>);
        }
    }

    return buttonsPane;
}

export default useButtonsPane;