import React from "react";
import apiMaster from "../../apiMaster";

import { GrFormCheckmark } from "react-icons/gr";

import PhotoContainer from "./photoContainer.js";
import TextContainer from "./textContainer.js";
import axios from 'axios';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: [],
      selectedStyle: null,
      textContainerVisibility: "text-container-visible",
    };

    this.updateTextContainerVisibility = this.updateTextContainerVisibility.bind(
      this
    );
    this.updateSelectedStyle = this.updateSelectedStyle.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product !== this.props.product) {
      // console.log('product', this.props.product)
      axios.get(`/products/${this.props.product.id}/styles`)
        .then(res => {
          console.log('response', res.data);
          this.setState({
            styles: res.data,
            selectedStyle: res.data[0]
          })
        })
      // apiMaster
      //   .getProductStyles(this.props.product.id)
      //   .then(({ data }) => {
      //     console.log('data', data) //returns an array of objects with styles
      //     this.setState({
      //       styles: data.results,
      //       selectedStyle: data.results[0],
      //     });
      //   })
      //   .then(() => {
      //     console.log('styles', this.state.styles)
      //     console.log('selectedstyle', this.state.selectedStyle)
      //   })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  componentDidMount() {
    // apiMaster
    //   .getProductStyles()
    //   .then(({ data }) => {
    //     this.setState({
    //       styles: data.results,
    //       selectedStyle: data.results[0],
    //     });
    //   })
    // console.log('this props',this.props)
    // console.log('does this get called');
    axios.get(`/products/${this.props.product.id}/styles`)
      .then(res => {
        console.log('response', res);
        this.setState({
          styles: res.data,
          selectedStyle: res.data[0]
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateTextContainerVisibility() {
    if (this.state.textContainerVisibility === "text-container-visible") {
      this.setState({
        textContainerVisibility: "text-container-hidden",
      });
    } else {
      this.setState({
        textContainerVisibility: "text-container-visible",
      });
    }
  }

  updateSelectedStyle(index) {
    this.setState({
      selectedStyle: this.state.styles[index],
    });
  }

  render() {
    return (
      <div>
        <div id="product-detail-columns-container">
          <PhotoContainer
            selectedStyle={this.state.selectedStyle}
            updateTextContainerVisibility={this.updateTextContainerVisibility}
          />
          <TextContainer
            product={this.props.product}
            styles={this.state.styles}
            selectedStyle={this.state.selectedStyle}
            userToken={this.props.userToken}
            textContainerVisibility={this.state.textContainerVisibility}
            averageRating={this.props.averageRating}
            updateSelectedStyle={this.updateSelectedStyle}
          />
        </div>
        <div id="product-notes">
          <span id="product-description" data-testid="productDescription">
            <div id="product-slogan" data-testid="productSlogan">
              <strong>
                {this.props.product != undefined
                  ? this.props.product.slogan
                  : null}
              </strong>
            </div>
            <div>
              {this.props.product != undefined
                ? this.props.product.description
                : null}
            </div>
          </span>
          <span id="product-features" data-testid="productFeatures">
            {this.props.product != undefined &&
            this.props.product.features != undefined
              ? this.props.product.features.map((item) => {
                  return (
                    <div>
                      <span className="product-features-checkmark">
                        <GrFormCheckmark />
                      </span>
                      <strong>{item.feature}:</strong> {item.value}
                    </div>
                  );
                })
              : null}
          </span>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
