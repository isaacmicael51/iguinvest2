import bc from '../pages/assets/bc.jpg'
import cs from '../pages/assets/cascavel-parana.jpg';
import cwb from '../pages/assets/curitiba.jpg';
import ita from '../pages/assets/itajai.jpg';
import itpm from '../pages/assets/itapema.jpg';


 
export default {
        getHomeCityList: () => {
            return [
                {
                    name: 'Balneario Camboriu',
                    url: bc,
                },
                {
                    name: 'Cascavel',
                    url: cs,
                },
                {
                    name: 'Curitiba',
                    url: cwb,
                },
                {
                    name: 'Itajaí',
                    url: ita,
                },
                {
                    name: 'Itapema',
                    url: itpm,
                },
            ];
        }
    }

