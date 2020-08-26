import React from 'react';

const product = (props) => {
    console.log(props.Product.name);
    return (
        <div>
     
    <h4>{props.Product.name}</h4>
        </div>
    );
};

export default product;

// import React from './node_modules/react';

// const Product = () => {
//     return (
//         <div>
//             <h1>This is prodact</h1>
//         </div>
//     );
// };

// export default Product;