import admin from 'firebase-admin';

const initFirebaseAdminApp = async () => {
  const firebaseConfig = {
    projectId: '',
    privateKey: '',
    clientEmail: '',
  };

  return admin
    .initializeApp({
      credential: admin.credential.cert(firebaseConfig),
    })
    .auth();
};


const setFirebasePasswordRules = async () => {
  let exitCode = 0;

  try {
    const adminAuthApp = await initFirebaseAdminApp();

    await adminAuthApp.projectConfigManager().updateProjectConfig({
      passwordPolicyConfig: {
        enforcementState: 'ENFORCE',
        forceUpgradeOnSignin: true,
        constraints: {
          requireUppercase: true,
          requireLowercase: true,
          requireNumeric: true,
          minLength: 8,
        },
      },
    });
  } catch (e) {
    console.error(e);
    exitCode = 1;
  }
  process.exit(exitCode);
};

setFirebasePasswordRules();
