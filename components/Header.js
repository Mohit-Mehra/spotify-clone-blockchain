import Image from "next/image";
import UploadButton from "./UploadButton";

const styles = {
  header: `max-w-7xl m-auto p-3`,
  headerWrapper: `flex items-center justify-between`,
  arrowButton: `bg-black mr-2 w-10 h-10 flex items-center justify-center rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-75`,
  headerRight: `flex`,
  profile: `flex items-center bg-black rounded-full p-1 px-3 bg-opacity-50 cursor-pointer hover:bg-opacity`,
  profileAvatarContainer:`w-7 h-7 rounded-full -ml-2 mr-3 flex items-center`,
  iconContainer:`ml-10`,
  title:`text-6xl font-extrabold`,
  playlistTextContent:`flex items-end mt-10`,
  controlsContainer: `flex items-center mt-10`,
  PlayButton:`bg-green-500 w-16 h-16 flex pl-2 items-center justify-center rounded-full cursor-pointer`
};

const Header = ({setShowUploadMusic}) => {

  return (
    <div className={styles.header}>
      <div className={styles.headerWrapper}>
        <div className="flex items-center">
          <div className={styles.arrowButton}>
            <Image src="/assets/chevronLeft.svg" width={20} height={20} />
          </div>
          <div className={styles.arrowButton}>
            <Image src="/assets/chevronRight.svg" width={20} height={20} />
          </div>
        </div>
        <div className={styles.headerRight}>
          <UploadButton setShowUploadMusic={setShowUploadMusic} />
          <div className={styles.profile}>
            <div className={styles.profileAvatarContainer}>
              <Image
                src="/assets/avatar.jpg"
                className="rounded-full"
                width={20}
                height={20}
              />
            </div>
            <p>Mohit Mehra</p>
          </div>
        </div>
      </div>

      <div className={styles.playlistTextContent}>
        <Image src="/assets/album.jpg" width={220} height={220} />

        <div className="ml-5">
          <>Album</>
          <div className={styles.title}>CURRENT SONG</div>
          <div className="flex items-center mt-5">
            <div className={styles.profileAvatarContainer}>
              <Image
                src="/assets/avatar.jpg"
                className="rounded-full"
                width={20}
                height={20}
              />
            </div>
            <p>
              <span className="text-bold">SteamBeats</span> • 2023 • 50 Songs, 5
              hr 15 min
            </p>
          </div>
        </div>
      </div>

      <div className={styles.controlsContainer}>
        <div className={styles.PlayButton}>
          <Image src="/assets/play.svg" width={30} height={30} />
        </div>
        <div className={styles.iconContainer}>
          <Image src="/assets/heart.svg" width={30} height={30} />
        </div>
        <div className={styles.iconContainer}>
          <Image src="/assets/download.svg" width={30} height={30} />
        </div>
        <div className={styles.iconContainer}>
          <Image src="/assets/more.svg" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
