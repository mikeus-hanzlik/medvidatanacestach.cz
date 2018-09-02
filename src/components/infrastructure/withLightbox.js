import React from "react";
import Lightbox from 'react-images';

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
            const openLightbox = (_this) => (imgIndex) => {
                return () => {
                    _this.setState({
                        currentImage: imgIndex,
                        lightboxIsOpen: true,
                    })
                };
            };


            return (<div>
                <Component openLightbox={openLightbox(this)} />
                <Lightbox
                    images={images.map(i => ({src: i}))}
                    isOpen={this.state.lightboxIsOpen}
                    onClickPrev={this.gotoPrevious.bind(this)}
                    onClickNext={this.gotoNext.bind(this)}
                    onClose={this.closeLightbox.bind(this)}
                    currentImage={this.state.currentImage}
                />
            </div>)
        }
    }
}