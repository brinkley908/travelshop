import react, { Component } from 'react'
import Avatar from 'react-avatar-edit'
import { Modal, Button } from 'antd';
import { Post } from '../authorisation/API';

type IState = {
    preview: string,
    name: string
}

interface IProps {
    visible: boolean
    onClose?: any
    email: string | null | undefined
}


export default class AvatarUpload extends Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            preview: "",
            name: this.formatName()
        }

        this.onClose = this.onClose.bind(this);
        this.onOk = this.onOk.bind(this);
        this.onCrop = this.onCrop.bind(this);

    }

    formatName(): string {
        if (this.props.email === null || this.props.email === undefined)
            return "";

        return this.props.email;

    }

    onShow() {

    }

    onClose() {

        if (this.props.onClose) {
            this.props.onClose();
        }
    }

    onOk() {

    }

    onCrop(preview: string) {
        this.setState({ preview: preview });
    }

    render() {

        return (

            <Modal

                title="Upload your photo"
                visible={this.props.visible && this.state.name !== ""}

                // onOk={handleOk}
                // confirmLoading={confirmLoading}
                onCancel={this.onClose}
                onOk={this.onOk}
                footer={[
                    <>
                        <Button onClick={this.onClose} >
                            Cancel
                        </Button>

                        <Button key="submit" type="primary" onClick={this.onOk} disabled={this.state.preview === ""}>
                            Upload
                        </Button>
                    </>
                ]}

            >
                <Avatar
                    width={390}
                    height={295}
                    onCrop={this.onCrop}

                />
            </Modal>


        );

    }

}

