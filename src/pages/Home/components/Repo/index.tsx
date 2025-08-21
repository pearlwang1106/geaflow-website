import { SubTitle } from '@site/src/components/SubTitle'
import styles from './index.module.css'
import { translate } from '@docusaurus/Translate'

const Repo = () => {
    return <div className={styles.repo}>
        <SubTitle
            title={translate({ message: 'product.repo' })}
        />
        <div className={styles.repoRow}>
            <div className="repo-card" data-repo="TuGraph-family/tugraph-db" />
            <div className="repo-card" data-repo="TuGraph-family/chat2graph" />
        </div>
        <div className={styles.repoRow}>
            <div className="repo-card" data-repo="TuGraph-family/OSGraph" />
            <div className="repo-card" data-repo="TuGraph-family/Awesome-Text2GQL" />
        </div>
        <div className={styles.repoRow}>
            <div className="repo-card" data-repo="TuGraph-family/miniGU" />
            <div className="repo-card" data-repo="TuGraph-family/community" />
        </div>
    </div>
}

export default Repo