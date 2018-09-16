import React from "react";
import Lightbox from 'react-images';
import {getWindowWidth} from "../helpers/windowHelper";

export default (Component, images) => {
    return class extends React.Component {
        state = {
            currentImage: 0,
            lightboxIsOpen: false
        };

        closeLightbox() {
            this.setState({
                currentImage: 0,
                lightboxIsOpen: false,
            });
        }

        gotoPrevious() {
            this.setState({
                currentImage: this.state.currentImage - 1,
            });
        }

        gotoNext() {
            this.setState({
                currentImage: this.state.currentImage + 1,
            });
        }

        render() {
            const openLightbox = (_this) => {
                let imgIndex = 0;
                return () => {
                    const currentIndex = imgIndex++;
                    return () => {
                        _this.setState({
                            currentImage: currentIndex,
                            lightboxIsOpen: true,
                        });
                    };
                };
            };


            return (<div>
                <Component openLightbox={openLightbox(this)}/>
                <Lightbox
                    images={images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickPrev={this.gotoPrevious.bind(this)}
                    onClickNext={this.gotoNext.bind(this)}
                    onClose={this.closeLightbox.bind(this)}
                    currentImage={this.state.currentImage}
                    backdropClosesModal={true}
                    width={getWindowWidth() * 0.75}
                />
            </div>)
        }
    }
}
