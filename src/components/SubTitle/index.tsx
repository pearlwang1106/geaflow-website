import FadeInSection from "@site/src/components/FadeInSection";
import styles from './index.module.css';
export const SubTitle = ({
    title,
    style,

}: {
    title: string;
    style?: React.CSSProperties;
    className?: any;
    isAnimate?: boolean;
}) => {
    return <FadeInSection>
        <div className={styles.subTitleGroup} style={{ ...style }}>
            <div className={styles.subTitle}>{title}</div>
        </div>
    </FadeInSection>
};
