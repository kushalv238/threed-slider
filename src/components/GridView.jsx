import './../styles/gridView.css';
import GridBox from './GridBox';

const GridView = () => {
    return (
        <div id="GridView">
            {
                images.map((img, i) => {
                    return <GridBox image={img.image} key={i}/>
                })
            }
        </div>
    )
}

const images = [
    {
        image: 'https://hautestock.co/wp-content/uploads/2019/06/haute-stock-photography-chill-out-review-2-scaled.jpg'
    },
    {
        image: 'https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg'
    },
    {
        image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
        image: 'https://images.pexels.com/photos/1038001/pexels-photo-1038001.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        image: 'https://images.pexels.com/photos/5218037/pexels-photo-5218037.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        image: 'https://images.pexels.com/photos/9119759/pexels-photo-9119759.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        image: 'https://images.pexels.com/photos/4588423/pexels-photo-4588423.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        image: 'https://images.pexels.com/photos/1266105/pexels-photo-1266105.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        image: 'https://images.pexels.com/photos/2638019/pexels-photo-2638019.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        image: 'https://images.pexels.com/photos/616838/pexels-photo-616838.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        image: 'https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
]

export default GridView