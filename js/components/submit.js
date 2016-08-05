import React from 'react';
import Popup from './popup';

let Submit = React.createClass({
    imageList: [],
    getInitialState() {
        return {
            counter: 0,
            title: '',
            showPop: false,
            showMsg: '',
            chooseImgs: [],
        };
    },
    handleTextChange(e) {
        let value = e.target.value;
        this.setState({
            counter: value.length,
            title: value,
        });
    },
    handleSelectImage(e) {
        let file = e.target.files[0];
        let fr = new FileReader();
        fr.readAsDataURL(file);
        fr.onload = () => {
            this.imageList.push(fr.result);
            this.setState({
                chooseImgs: this.imageList
            });
        };
    },
    submitProduct(e) {
        let value = this.state.title;
        e.stopPropagation();
        e.preventDefault();

        if (value.trim().length === 0) {
            this.setState({
                showPop: true,
                showMsg: '请输入商品描述...'
            });
            return;
        } else if (this.imageList.length === 0) {
            this.setState({
                showPop: true,
                showMsg: '上传几张图片吧...'
            });
            return;
        }
        //模拟提交表单
        fetch('http://www.wml.com/reactjs-demo1/data/submit.php', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                content: value,
                images: this.imageList
            })
        }).then((res) => {
            console.log('res', res);
            if (!res.ok) {
                window.location.replace('#/success');
            }
        });
    },
    hidePopup() {
        this.setState({
            showPop: false,
            showMsg: ''
        });
    },
    render() {
        return(
            <div className="submit-con">
            {
                this.state.showPop ?
                    <Popup show={true} hidePopup={this.hidePopup} content={this.state.showMsg}/>
                    : null
            }
            <textarea placeholder="请输入商品描述..." onChange={this.handleTextChange} />
            <p className="counter-con">
                <i className={this.state.counter > 100 ? 'counter-error' : ''}>
                    {this.state.counter}
                </i>
                <i>/100</i>
            </p>
            <div className="choose-image">
                {
                    this.state.chooseImgs.length > 0 ?
                    this.state.chooseImgs.map((img) => {
                        return (<img src={img} />);
                    })
                    :null
                }
                {
                    this.state.chooseImgs.length < 5 ?
                    <div className="choose-btn">
                        <input type="file" accept="image/*" onChange={this.handleSelectImage} />
                    </div>
                    :null
                }
            </div>
            <div className="submit-btn">
                <button onClick={this.submitProduct}>提交</button>
            </div>
        </div>
        );
    }
});

export default Submit;