import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Styles.module.css'
import CascadeLogo from 'Remote/CascadeLogo'



const SelectWorkspaceScreen = ({userData}) => {

    const {loginWithRedirect} = useAuth0()

    const [workspaceId, setWorkspaceId] = useState();
    useEffect(() => {
      if(workspaceId) {
        console.log('workspaceId', workspaceId)
        loginWithRedirect({
            organization: workspaceId
        })
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [workspaceId])

    return (
        <div className={styles.main}>
            <CascadeLogo size="medium" />
            <h2>Cascade Workspaces</h2>
            <p>Please choose the one you want to login with:</p>
            {userData && (
            <div className={styles.buttons}>
                {userData['https://go.cascade.app/workspaces'].map(workspace => (
                    <div className={styles.workspaceButton} key={workspace.id} onClick={() => setWorkspaceId(workspace.id)}>
                        <CascadeLogo size="medium" iconOnly className={styles.logo} />
                        <span className={styles.workspaceInfo}>
                            <p className={styles.workspaceName}>
                                {workspace["display_name"]}
                            </p>
                            <p className={styles.membersCount}>{workspace.members_count} teammates</p>
                        </span>
                    </div>
                ))}
            </div>)}
        </div>
    )
}

export default SelectWorkspaceScreen