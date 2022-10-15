import { paneTemplates } from "../globalConst";
import { useHistory } from 'react-router-dom';

const useButtonsPane = () => {
    const history = useHistory();

    const clickHandler = (routeName) => {
        if (window.innerWidth <= 1000){
            history.push(routeName);
        }
    }

    return function(template){
        const buttonsPane = [];

        for (let i = 0; i < template.length; ++i){
            if (template == paneTemplates.navigation){
                const { key , caption, route } = template[i];
                buttonsPane.push(<button key={ key } type='button' className={ `p-2 ${ i == template.length - 1? '' : 'me-4' }` }
                onClick={ () => clickHandler(route) }>{ caption }</button>);
            }
            else if (template == paneTemplates.navigation_mobile){
                const { key , icon, route } = template[i];
                buttonsPane.push(<i key={ key } className={ `${ icon }${ i == template.length - 1? '' : ' me-4' } p-2` }
                onClick={ () => clickHandler(route) }></i>);
            }
        }

        return buttonsPane;
    }
}

export default useButtonsPane;