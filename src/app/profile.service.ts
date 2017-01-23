import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {

  getProfile(){
    console.log("serviced!");
    return Promise.resolve({name:"Bruce Wayne"});
  }
  //
  // getArticles(callback){
  //   return Promise.resolve(
  //     firebase.database().ref('/articles').once('value',
  //       (snapshot) => {
  //         snapshot.forEach(
  //           (article) => {
  //             let art = article.val();
  //             art.key = article.key;
  //             callback(art);
  //           }
  //         );
  //       }
  //     )
  //   );
  // }
  // /*fetches a single article stub*/
  // getArticle(article, callback){
  //   firebase.database().ref('/articles/' + article).once('value',
  //     (article) => {
  //       let art = article.val();
  //       if(!art.key){
  //         art.key = article.key;
  //       }
  //       if(callback == null){
  //         console.dir(art);
  //       } else {
  //         callback(art);
  //       }
  //     }
  //   );
  // }

  constructor() { }

}
