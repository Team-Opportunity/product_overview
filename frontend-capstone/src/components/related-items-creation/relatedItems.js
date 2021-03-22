import React from 'react';
import apiMaster from '../../apiMaster';
import ProductCard from './productCard';
import YourOutfit from './yourOutfit';
import axios from 'axios';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProductIds: [],
      relatedItemFeatures: [],
      relatedItemNames: [],
      relatedItemRatings: [],
    };

    this.getRelatedIds = this.getRelatedIds.bind(this);
    this.getRelatedItemFeatures = this.getRelatedItemFeatures.bind(this);
    this.getRelatedItemNames = this.getRelatedItemNames.bind(this);
    this.getRelatedItemRatings = this.getRelatedItemRatings.bind(this);
    this.removeDuplicateRelatedIds = this.removeDuplicateRelatedIds.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProductID !== prevProps.currentProductID) {
      this.getRelatedIds();
    }
  }

  getRelatedIds() {
    axios.get(`/products/${this.props.currentProductID}/related`)
    .then(res => {
      let relatedIds = [];
      for (let i = 0; i < res.data.length; i++) {
        relatedIds.push(res.data[i].related_products_id);
      }
      this.setState({
         relatedProductIds: this.removeDuplicateRelatedIds(relatedIds),
      });
    })
    .catch(err => console.log(err))
    .then(() => {
      this.getRelatedItemFeatures();
      this.getRelatedItemNames();
      this.getRelatedItemRatings();
    })
    .catch((err) => {
      console.log('err in getRelatedIds: ', err);
    });
    // apiMaster
    //   .getRelatedProducts(this.props.currentProductID)
    //   .then((ids) => {
    //     this.setState({
    //       relatedProductIds: this.removeDuplicateRelatedIds(ids.data),
    //     });
    //   })
      // .then(() => {
      //   this.getRelatedItemFeatures();
      //   this.getRelatedItemNames();
      //   this.getRelatedItemRatings();
      // })
      // .catch((err) => {
      //   console.log('err in getRelatedIds: ', err);
      // });
  }

  removeDuplicateRelatedIds(array) {
    const uniqueIds = new Set(array);
    const uniqueIdsArray = Array.from(uniqueIds);
    return uniqueIdsArray;
  }

  getRelatedItemFeatures() {
    let promises = [];
    for (let i = 0; i < this.state.relatedProductIds.length; i++) {
      promises.push(
        axios.get(`/products/${this.state.relatedProductIds[i]}`)
          .then (res => {
            return res.data
          })
          .catch(err => console.log(err))
        // apiMaster
        //   .getProductInfo(this.state.relatedProductIds[i])
        //   .then((res) => {
        //     console.log(res.data.features)
        //     return res.data.features;
        //   })
      );
    }
    Promise.all(promises)
      .then((data) => {
        this.setState({ relatedItemFeatures: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getRelatedItemNames() {
    let promises = [];
    for (let i = 0; i < this.state.relatedProductIds.length; i++) {
      promises.push(
        axios.get(`/products/${this.state.relatedProductIds[i]}`)
          .then (res => {
            return res.data[0].name
          })
          .catch(err => console.log(err))
        // apiMaster
        //   .getProductInfo(this.state.relatedProductIds[i])
        //   .then((res) => {
        //     console.log(res.data);
        //     return res.data.name;
        //   })
      );
    }
    Promise.all(promises)
      .then((data) => {
        this.setState({ relatedItemNames: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getRelatedItemRatings() {
    let promises = [];
    for (let i = 0; i < this.state.relatedProductIds.length; i++) {
      promises.push(
        apiMaster
          .getReviewMetaData(this.state.relatedProductIds[i])
          .then(({ data }) => {
            let averageRating = this.props.calculateAverageRating(data.ratings);
            return averageRating;
          })
      );
    }
    Promise.all(promises)
      .then((data) => {
        this.setState({
          relatedItemRatings: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <div className="related-products-container">
          <div className="widget-headings">Related Products</div>
          <ProductCard
            relatedProducts={this.state.relatedProductIds}
            relatedProductNames={this.state.relatedItemNames}
            currentProductId={this.props.currentProductID}
            currentProductName={this.props.currentProductName}
            currentProductFeatures={this.props.currentProductFeatures}
            relatedItemFeatures={this.state.relatedItemFeatures}
            relatedItemRatings={this.state.relatedItemRatings}
            productCardClicked={this.props.productCardClicked}
          />
        </div>
        <div>
          <div className="widget-headings">Your Outfit</div>
          <YourOutfit
            currentProductInfo={this.props.currentProductInfo}
            averageRating={this.props.averageRating}
            productCardClicked={this.props.productCardClicked}
          />
        </div>
      </>
    );
  }
}

export default RelatedItems;
