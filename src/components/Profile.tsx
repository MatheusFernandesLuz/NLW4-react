import styles from "../styles/components/Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/MatheusFernandesLuz.png"
        alt="Matheus Fernandes"
      />
      <div>
        <strong>Matheus Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
