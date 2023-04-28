// import Dexie, {Table} from "dexie";

// export interface Auth_Login{
//     id : string
//     pass : string
// }


// export class Db extends Dexie {
//     Auth_Login! : Table<Auth_Login, number>
//     db : any = new Dexie("",undefined);

//     constructor(){
//         super('Dexie is live');
//         this.version(1).stores({
//             Auth_Login : '++id'
//         })
//         this.open();
//         this.on('populate', () => this.populate());
//     }

//     async populate() {
//         const todoListId = await this.db.todoLists.add({
//           title: 'To Do Today',
//         });
//         await this.db.todoItems.bulkAdd([
//           {
//             todoListId,
//             title: 'Feed the birds',
//           },
//           {
//             todoListId,
//             title: 'Watch a movie',
//           },
//           {
//             todoListId,
//             title: 'Have some sleep',
//           },
//         ]);
//     }

// }

// // export const db = new Dexie();


(function (){
    if(!window.indexedDB){
        console.log(`Your Browser dosen't support IndexedDB`);
        return
    }

    let databaseName = "Trial"
    let databaseVersion = 1


    const request = indexedDB.open(databaseName, databaseVersion)

    request.onerror = (event : any) =>{
        console.log(`Database error :  ${event.target.errorCode}`);
        
    }

    request.onsuccess = (event : any) =>{

        const db = event.target.result;

        insertContacts(
            db,
            {
                email : '123456789@getMaxListeners.com',
                firstName : 'Atul',
                lastName: 'Doe'
            }
        )
        
        insertContacts(
            db,
            {
                email : '123456789@getMaxListeners.com',
                firstName : 'Atul',
                lastName: 'Doe'
            }
        )

    }

    // create the contacts object stores and indexes
    request.onupgradeneeded = (event : any) =>{
        let db = event.target.result;

        // create the contacts object storeswith and auto increment id
        let store = db.createObjectStore('Contacts', {
            autoIncrement : true
        });

        let index = store.createIndex('email', 'email',{
            unique : true
        });
    }

    function insertContacts(db : any, contact : any){
        // create a new transaction
        const txn = db.transaction('Contacts', 'readwrite');

        // get the contacts object store
        const store = txn.objectStore('Contacts');

        let query = store.put(contact);

        // handle success case
        query.onsuccess = function(event : any){
            console.log(event);
            
        }

        query.onerror = function(event : any){
            console.log(event.target.errorCode);
            
        }

        // close the database once the transaction completes

        txn.oncomplete = function (){
            db.close();
        }
    }

})();
