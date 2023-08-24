import { LinkCinemaButton } from '../../LinkCinemaButton'

export const ListCinemaButton = () => {
  const buttons = [
    {
      alt: 'CGV',
      src: 'https://i.ibb.co/qdFj9dC/cgv.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://www.cgv.vn/'
    },
    {
      alt: 'BHD',
      src: 'https://i.ibb.co/0Fr9MgB/bhd.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://www.bhdstar.vn/'
    },
    {
      alt: 'Galaxy',
      src: 'https://i.ibb.co/qDbGdBX/galaxycine.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://www.galaxycine.vn/'
    },
    {
      alt: 'Cinestar',
      src: 'https://i.ibb.co/cwmKXYS/cinestar.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'http://cinestar.com.vn/'
    },
    {
      alt: '',
      src: 'https://i.ibb.co/hRDFsvL/lotte.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://lottecinemavn.com/LCHS/index.aspx'
    },
    {
      alt: '',
      src: 'https://i.ibb.co/JzFt1TK/megags.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://www.megagscinemas.vn/'
    },
    {
      alt: '',
      src: 'https://i.ibb.co/dmwqNLN/bt.jpg',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'http://cinestar.com.vn/'
    },
    {
      alt: '',
      src: 'https://i.ibb.co/M8bQP1D/dongdacinema.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'http://ddcinema.vn/'
    },
    {
      alt: '',
      src: 'https://i.ibb.co/KDS2fJS/TOUCH.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://touchcinema.com/'
    },
    {
      alt: '',
      src: 'https://i.ibb.co/mCFM7CQ/cnx.jpg',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://cinemaxvn.com/#'
    },
    {
      alt: 'CGV',
      src: 'https://i.ibb.co/qdFj9dC/cgv.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://www.cgv.vn/'
    },
    {
      alt: 'BHD',
      src: 'https://i.ibb.co/0Fr9MgB/bhd.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://www.bhdstar.vn/'
    },
    {
      alt: 'Galaxy',
      src: 'https://i.ibb.co/qDbGdBX/galaxycine.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://www.galaxycine.vn/'
    },
    {
      alt: 'Cinestar',
      src: 'https://i.ibb.co/cwmKXYS/cinestar.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'http://cinestar.com.vn/'
    },
    {
      alt: '',
      src: 'https://i.ibb.co/hRDFsvL/lotte.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://lottecinemavn.com/LCHS/index.aspx'
    },
    {
      alt: '',
      src: 'https://i.ibb.co/JzFt1TK/megags.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://www.megagscinemas.vn/'
    },
    {
      alt: '',
      src: 'https://i.ibb.co/dmwqNLN/bt.jpg',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'http://cinestar.com.vn/'
    },
    {
      alt: '',
      src: 'https://i.ibb.co/M8bQP1D/dongdacinema.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'http://ddcinema.vn/'
    },
    {
      alt: '',
      src: 'https://i.ibb.co/KDS2fJS/TOUCH.png',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://touchcinema.com/'
    },
    {
      alt: '',
      src: 'https://i.ibb.co/mCFM7CQ/cnx.jpg',
      size: 'w-[30px] h-[30px] rounded-[50%] bg-white',
      url: 'https://cinemaxvn.com/#'
    }
  ]

  return (
    <div className='grid grid-cols-5 gap-6'>
      {buttons.map((button, index) => (
          <div><LinkCinemaButton key={index} {...button} /></div>
      ))}
    </div>
  )
}

export default ListCinemaButton
