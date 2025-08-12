import {
    Button,
    Dropdown,
    Form,
} from 'antd';
import styles from './index.module.css';
import { useState } from 'react';
import {
    AliyunOutlined,
    GithubOutlined,
    UpOutlined,
    VerticalAlignBottomOutlined,
} from '@ant-design/icons';
import { translate } from '@docusaurus/Translate';


const { Item } = Form;

interface IMainButtonProps {
    style?: Record<string, any>;
    btnText: string;
    overlayStyle?: Record<string, any>;
}

const MainButton: React.FC<IMainButtonProps> = ({
    style,
    btnText,
    overlayStyle,
    ...props
}) => {
    const [visible, setVisible] = useState(false);


    const items = [
        {
            label: translate({ message: 'github' }),
            key: 'item-1',
            icon: <GithubOutlined />,
            onClick: () => {
                setVisible(false);
                window.open('https://github.com/apache/geaflow');
            },
        },
        {
            label: translate({ message: 'home.btn.desc1' }),
            key: 'item-2',
            icon: <AliyunOutlined />,
            onClick: () => {
                setVisible(false);
                window.open('https://aliyun-computenest.github.io/quickstart-tugraph/');
            },
        },
        {
            label: translate({ message: 'header.assets.download' }),
            key: 'item-3',
            icon: <VerticalAlignBottomOutlined />,
            onClick: () => {
                setVisible(false);
                // history.push(historyPushLinkAt('/download'));
            },
        },
    ];

    return (
        <>
            <Dropdown
                menu={{ items }}
                overlayClassName={styles.communityDropdown}
                trigger={['hover', 'click']}
                onOpenChange={(visible) => setVisible(visible)}
                overlayStyle={overlayStyle}
                getPopupContainer={(triggerNode) => triggerNode || document.body}
            >
                <Button
                    type="primary"
                    size="large"
                    shape="round"
                    className={styles.experience}
                    style={style}
                    {...props}
                >
                    {btnText}
                    <UpOutlined
                        className={styles.arrowIcon}
                        style={{ transform: `rotateX(${visible ? 0 : 180}deg)` }}
                    />
                </Button>
            </Dropdown>
        </>
    );
};

export default MainButton;
