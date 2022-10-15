import { paneTemplates } from "../globalConst";
import { useHistory } from 'react-router-dom';

const useButtonsPane = () => {
    const history = useHistory();

    return function(template){
        const buttonsPane = [];

        for (let i = 0; i < template.length; ++i){
            if (template == paneTemplates.navigation){
                const { key , caption, route } = template[i];
                buttonsPane.push(<button key={ key } type='button' className={ `p-2 ${ i == template.length - 1? '' : 'me-4' }` }
                onClick={ () => history.push(route) }>{ caption }</button>);
            }
            else if (template == paneTemplates.navigation_mobile){
                const { key , icon, route } = template[i];
                buttonsPane.push(<i key={ key } className={ `${ icon }${ i == template.length - 1? '' : ' me-4' } p-2` }
                onClick={ () => history.push(route) }></i>);
            }
        }

        return buttonsPane;
    }
}

export default useButtonsPane;