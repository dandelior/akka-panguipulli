import styles from "../styles/parts/MasterPlan.module.sass";

const MasterPlan = () => {
  return (
    <div className={styles.masterPlan} id="masterplan">
      <div className={styles.masterPlanInner}>
        <div className={styles.masterPlanHeader}>
          <h2>Master Plan</h2>
          <p>VISTA VOLCÁN MOCHO CHOSHUENCO / LAGO PANGUIPULLI</p>
        </div>
      </div>
    </div>
  );
};

export default MasterPlan;
