import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import RenderSmoothImage from 'render-smooth-image-react';
// import styles from 'render-smooth-image-react/build/style.css';
import styles from './Details.css';

const Details = ({ breed }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  

  return (    
    <>
      {/* {breed && <img src={breed} />} */}
      <div className={styles.imageGrid}>
        <img 
          src={breed}
          alt={breed}
          // className={`styles.smoothImage image${
          //   imageLoaded ? 'Visible' : 'Hidden'
          // }`}
          onLoad={()=> setImageLoaded(true)} />
        {!imageLoaded && (
          <h2>loading image...</h2>
        )}
      </div>
    </>

  );
  
};

//   return (
//     <>
//       {/* {breed && <img src={breed} />} */}
//       <div style={{ width: 300, height: 300 }}>
//         <img 
//           src={breed}
//           alt={breed}
//           className={`styles.smoothImage image${
//             imageLoaded ? 'Visible' : 'Hidden'
//           }`} onLoad={()=> setImageLoaded(true)} />
//         {!imageLoaded && (
//           <h3>LOADING...</h3>
//         // <div className={styles.smoothPreloader}>
//         //   <span className={styles.loader} />
//         // </div>
//         )}
//       </div>
//     </>
//   );
// };

Details.propTypes = {
  breed: PropTypes.string
};

export default Details;


// function RenderSmoothImage({src, alt}) {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <div className="smooth-image-wrapper">
//       <img
//         src={src}
//         alt={alt}
//         className={`smooth-image image-${
//           imageLoaded ? 'visible' :  'hidden'
//         }`}
//         onLoad={()=> setImageLoaded(true)}}
//       />
//       {!imageLoaded && (
//         <div className="smooth-preloader">
//           <span className="loader" />
//         </div>
//       )}
//     </div>
//   )
// }


// import React from 'react';
// import RenderSmoothImage from 'render-smooth-image-react';
// import 'render-smooth-image-react/build/style.css';
 
// const Image = () => (
//   <div style={{width: 300, height: 300}}>
//     <RenderSmoothImage src={'your-image-source'} alt="alternate-text"  />
//   </div>
// );
 
// export default Image;
