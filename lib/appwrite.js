// import { 
//   Account,
//   Avatars,
//   Client,
//   Databases,
//   ID,
//   Query,
//   Storage,
// } from 'react-native-appwrite';

// export const config = {
//   endpoint: "https://cloud.appwrite.io/v1",
//   platform: "com.ationg.moneymanager",
//   projectId: "672c4f5000034a02cefe",
//   storageId: "660d0e59e293896f1eaf",
//   databaseId: "672c6071001979bbf303",
//   userCollectionId: "672c53a60022dee8029d",
//   transactionCollectionId: "672c53dc001d6b56caa1",
//   billCollectionId: "672c5469003a26d5ff24",
//   savingsCollectionId: "672c54870020c97c21e4",
// };

// // Init your React Native SDK
// const client = new Client();

// client
//   .setEndpoint(config.endpoint)
//   .setProject(config.projectId)
//   .setPlatform(config.platform);

// const account = new Account(client);
// const avatars = new Avatars(client);
// const databases = new Databases(client);

// // Register user
// export const createUser = async (email, password, username) => {
// try {
//   // Create a new account in Appwrite
//   const newAccount = await account.create(ID.unique(), email, password, username);

//   // Generate avatar URL based on username initials
//   const avatarUrl = avatars.getInitials(username);

//   // Automatically sign in the user after creation
//   await signIn(email, password);

//   // Create a new document in the database with user details
//   const newUser = await databases.createDocument(
//     config.databaseId,
//     config.userCollectionId,
//     ID.unique(),
//     {
//       accountId: newAccount.$id,
//       email,
//       username,
//       avatar: avatarUrl
//     }
//   );

//   return newUser;

// } catch (error) {
//   console.error(error);
//   throw new Error(error.message || 'Error creating user');
// }
// };

// Sign In
// export async function signIn(email, password) {
// try {
//   const session = await account.createEmailSession(email, password);
  
// } catch (error) {
//   console.error(error);
//   throw new Error(error.message || 'Error logging in');
// }
// }






import { 
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
    Storage,
} from 'react-native-appwrite';

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.ationg.moneymanager",
    projectId: "672c4f5000034a02cefe",
    storageId: "660d0e59e293896f1eaf",
    databaseId: "672c6071001979bbf303",
    userCollectionId: "672c53a60022dee8029d",
    transactionCollectionId: "672c53dc001d6b56caa1",
    billCollectionId: "672c5469003a26d5ff24",
    savingsCollectionId: "672c54870020c97c21e4",

  };

  
// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.

    const account = new Account(client);
    const storage = new Storage(client);
    const avatars = new Avatars(client);
    const databases = new Databases(client);

// Register user
export async function createUser(email, password, username) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    // Check if account creation was successful
    if (!newAccount) {
      throw new Error;
    }

    // Generate avatar URL based on username initials
    const avatarUrl = avatars.getInitials(username);

    // Automatically sign in the user after creation
    await signIn(email, password);

    // Create a new document in the database with user details
    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
      }
    )

    return newUser;

  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}


//   // Sign In
  export async function signIn(email, password) {
    try {
      const session = await account.createEmailSession(email, password)
  
      return session;
    } catch (error) {
      console.error(error);
      throw new Error(error.message || "Error logging in");
    }
  }
  
  // Get Account
  export async function getAccount() {
    try {
      const currentAccount = await account.get();
  
      return currentAccount;
    } catch (error) {
      throw new Error(error);
    }
  }

  // Get Current User
export async function getCurrentUser() {
    try {
      const currentAccount = await getAccount();
      if (!currentAccount) throw Error;
  
      const currentUser = await databases.listDocuments(
        config.databaseId,
      config.userCollectionId,
        [Query.equal("accountId", currentAccount.$id)]
      );
  
      if (!currentUser) throw Error;
  
      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  