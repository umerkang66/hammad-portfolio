import { FC, useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { FaTimesCircle } from 'react-icons/fa';

import { Service } from '../../../common-types/service';
import styles from './service-card.module.scss';

const ServiceCard: FC<{ service: Service }> = ({ service }) => {
  const [serviceToUpdate, setServiceToUpdate] = useState(service);
  const [updateMode, setUpdateMode] = useState(false);

  return (
    <div className={styles.service_card}>
      {updateMode ? (
        <>
          <input
            className={styles.update_input}
            type="text"
            value={serviceToUpdate.name}
            onChange={e =>
              setServiceToUpdate(prevState => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />

          <div>
            <button
              onClick={() => setUpdateMode(false)}
              className={
                styles.update_actions + ` ${styles.update_action_save}`
              }
            >
              Update
            </button>
            <button
              onClick={() => setUpdateMode(false)}
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
          {serviceToUpdate.name}
          <div className={styles.actions}>
            <FiEdit2
              onClick={() => setUpdateMode(true)}
              size={28}
              className="icon"
            />
            <FaTimesCircle size={28} className="icon" />
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceCard;
