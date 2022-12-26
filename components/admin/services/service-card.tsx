import { type Dispatch, type FC, type SetStateAction, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { FaTimesCircle } from 'react-icons/fa';
import slugify from 'slugify';

import { Service } from '../../../common-types/service';
import styles from './service-card.module.scss';

type Props = {
  service: Service;
  index: number;
  updateServices: Dispatch<SetStateAction<Service[]>>;
};

const ServiceCard: FC<Props> = ({ service, index, updateServices }) => {
  const [currentService, setCurrentService] = useState(service);
  const [updateMode, setUpdateMode] = useState(false);

  const updateService = () => {
    setUpdateMode(false);

    updateServices(prevState => {
      const currSer = prevState[index];
      currSer.name = currentService.name;
      currSer.slug = slugify(currSer.name);

      prevState.splice(index, 1, currSer);
      return [...prevState];
    });
  };

  const deleteService = () => {
    updateServices(prevState => {
      return prevState.filter((_, i) => i !== index);
    });
  };

  return (
    <div className={styles.service_card}>
      {updateMode ? (
        <>
          <input
            className={styles.update_input}
            type="text"
            value={currentService.name}
            onChange={e =>
              setCurrentService(prevState => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />

          <div>
            <button
              onClick={updateService}
              className={
                styles.update_actions + ` ${styles.update_action_save}`
              }
            >
              Update
            </button>
            <button
              onClick={() => {
                setUpdateMode(false);
                setCurrentService(service);
              }}
              className={
                styles.update_actions + ` ${styles.update_action_cancel}`
              }
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          {currentService.name}
          <div className={styles.actions}>
            <FiEdit2
              onClick={() => setUpdateMode(true)}
              size={28}
              className="icon"
            />
            <FaTimesCircle onClick={deleteService} size={28} className="icon" />
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
