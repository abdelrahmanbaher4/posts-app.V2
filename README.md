## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## App Demo

### Mobile Version

![alt text](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXd4ZW0yMnJ6OWZ0aHY3a29sYzZ6N2wzdWk1MWt0aDQycnpoZnVqZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/15zwuBwDAXXvrBjN2p/giphy.gif)

### Desktop Version

![alt-text](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXgxdTNsOWhicmgxdDVuYmhqZG05OXdlbmMzY3JzajcyOW1wbDdyNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hbEbor9opsEnPSToqE/giphy.gif)

## Introduction 📺

- Posts Application is a single page responsive app using NextJS , where it's responsitivty makes it mobile first , and adaptive for all screens.

## Requirements

- User should be able to naviagate smoothly through the main page.
- User should be able to see his/her favorite posts when hitting the heart icon on the page
- The Liked Posts should be saved even if we restarted the application.
- When the user go to the favorites page, they will see their favorite posts.
- The design/styling should be mobile-first, and on the desktop version the bottom menu should instead be on top; with the labels
- Consists of 2 responsive pages (adapted on all devices) :

## Architecture

### Front-End Architecture

- I've used `NextJs`, `SCSS` and `Typescript`, resposntivity and modularity were kept in mind too while implemnting the frontend, I've tried as much as possible to divide the files and the components in a well-structured manner, for better reusability of the shared components and for making it easier to develop and maintain the code.

- Below is the file structure of the Application
- ![alt text](https://github.com/abdelrahmanbaher4/posts-app.V2/blob/main/Folder%20Structure.png?raw=true)

### Front-End Architecture

- I've tried as much as possible to divide the files and the components in a well-structured manner, for better reusability of the shared components and for making it easier to develop and maintain the code.

#### Application flowchart

![alt text](https://github.com/abdelrahmanbaher4/posts-app.V2/blob/main/flowchart.png?raw=true)

### flowChart and System Decription

#### State Management

- I've used the `Context` in combination of `useState` for the state management across the application to keep track of each post likes. 
- The context and `provider` are defined in the `providers` folder as `LikesProvider.tsx`.
- I have made it a `Client Component` to be able to use `hooks` as we can't use it inside of a `Server Component`
- I made 2 `interfaces` -> `ProviderProps` and `LikesContext`
- `storedLikes: TLike` in the `ILikesContext` interface it takes 2 values the first is the `postId` as `string` and the second `boolen` to detect if i reached the end of the `posts` object
- Defined the `createContext` and intialized it with ` storedLikes: {}` : that keeps track of the stored likes and `setStoredLikes: () => {}` to set the storedLikes
https://github.com/abdelrahmanbaher4/posts-app.V2/blob/9246f8f5c181e9d4922f0869e08bf6ab0656966a/app/providers/LikesProvider.tsx#L1-L16

- Wrapping the children inside of the `LikesContextProvider` that takes `{StoredLikes,setStoredLikes` to make it avaliable for all it`s children
https://github.com/abdelrahmanbaher4/posts-app.V2/blob/9246f8f5c181e9d4922f0869e08bf6ab0656966a/app/providers/LikesProvider.tsx#L18-L31
- I made a custom hook called `useLikes` to not to import the `context` and `useContext` hook everywhere.
https://github.com/abdelrahmanbaher4/posts-app.V2/blob/9246f8f5c181e9d4922f0869e08bf6ab0656966a/app/providers/LikesProvider.tsx#L33-L35

#### Types

- I created an `interface` for the `IPostInfo` that contains type for each post and then i export it to be able to use it in the `PostsService` and to pass it as a `prop` to the `Post` component
  https://github.com/abdelrahmanbaher4/posts-app.V2/blob/9246f8f5c181e9d4922f0869e08bf6ab0656966a/app/types/post.interface.ts#L1-L10
- I tried to make `index.ts` for everything i want to `export` to make it easier to `import` in the `import` string
  https://github.com/abdelrahmanbaher4/posts-app.V2/blob/9246f8f5c181e9d4922f0869e08bf6ab0656966a/app/types/index.ts#L1

#### Components , Services & Pages

#### Components

- The app consists of 3 reusable components `Post` , `navbar` and `like` and are defined in the components folder

  - `Navbar` Component and it is a `serverComponent` , it is responsive and the `Navbar` goes to the bottom of the page in the mobile resolution.
    https://github.com/abdelrahmanbaher4/posts-app.V2/blob/9246f8f5c181e9d4922f0869e08bf6ab0656966a/app/components/navbar/index.tsx#L1-L19

  - `Post` component and it was a `ClientComponent` to be able to use `hooks` inside it for the like interactivity , but i have split it into 2 components and added the `like` component to make the `Post` Component as a `Server Component` 
    - `Post` Component takes 2 `props` , the `post:IPostInfo` itself of type `IPostInfo` for the interface we created earlier and `Liked` as a `boolean` to trace if the post liked , and it returns the `Post`
      
    - The `Like` Component and it contains all the `client side render`
    - `useLikes()` custom hook it used as `useContext` to be able to access the `LikesContext` and we update it using `setStoredLikes()` method
    - And the `likeChanged` function tp keep track of the post , so if the user like it it will be store in the `localStorage` , if he clicked again and it was liked , it is then removed from the `localStorage`
      https://github.com/abdelrahmanbaher4/posts-app.V2/blob/9246f8f5c181e9d4922f0869e08bf6ab0656966a/app/components/post/like.tsx#L1-L39

#### Services

- I tried to archetict my code to simulate having a backend and implement a `PostsService` that gets me data from the backend , so when the user click on get started in the main page , it redirects the user to `/posts` page , where it talks to the `PostsService` to get all the data of the posts as follows.
- `PostsService` is implemented using `Singleton` design pattern , where i make sure i create only one Instance of the `PostsService`
  https://github.com/abdelrahmanbaher4/posts-app.V2/blob/9246f8f5c181e9d4922f0869e08bf6ab0656966a/app/services/posts/index.ts#L1-L169
  
  - `PostsService` is responsible for getting all posts through `getPosts()` method , and it retrives the data Paginated as it retreive 5 posts only and this is achived using the `slice` method ,where it takes the page number and multiply it by the `pageSize` to know the count for the `slice`, and the `pageSize` is increased by one in the `/posts` page, whenever the user clicks `load more` and always make sure that it didn't exceed the posts `length` by this condition `list.length === this.posts.length`
    ```javascript
     public getPosts(page: number) {
        const list = this.posts.slice(0, page * this.pageSize);
        return [list, list.length === this.posts.length];
      }
    ```
  - `PostService` also responsible for getting the likedPost throught `getPost(postId:string)` and it takes the `postId` as a parameter and uses `filter` method to get the favorites from all the posts
  ```javascript
  public getPost(postId: string): PostInfo {
  return this.posts.filter((post) => post.postId == Number(postId))[0];
  }
  ```

#### Pages

- we have 2 routes `/posts` and `/favorites` and they are grouped under the `(pages)` as they have the same `styling` , so I am grouping them and giving them same styles in `layout.tsx`
- `layout.tsx` , consists of the 2 components `Post` & `Navbar`
  https://github.com/abdelrahmanbaher4/posts-application/blob/63ddf4bd9b3b21ae137dc84afe1b83bea13ad8c7/app/(pages)/layout.tsx#L1-L13

- `/pages` route , It uses the global state for `storedLikes` to know the `storedLikes` Posts and display them with the like icon `filled with red` if liked , it keeps track of the liked posts even if you restarted the application , as it is saved in the `localStorage`
  https://github.com/abdelrahmanbaher4/posts-app.V2/blob/9246f8f5c181e9d4922f0869e08bf6ab0656966a/app/(pages)/layout.tsx#L1-L13
- for styles i always use `styles.modules.css` to avoid clashes of the classNames

### Back-End Architecture (To Be Added)
* I tried to add user authentication/authorization and i have used `clerk.dev` library and it was working fine , but then i encounterd many errros , and i couldn't have enough time to fix it, but will do it later :)
  *  ![alt text](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcXZ3MHVxcnI1Y2gzanZzbHNqeDdwY3o2YWtrMnF6czA3c2x6MWF2dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WFrxrfrUC5ktUFT7PX/giphy.gif)
* I added also `MYSQL` DB hosted on `planetScale.com` and i have used `prisma` to be able to track my `DB` changes
  * Here is the Schema Desgin
    * ![alt text](https://github.com/abdelrahmanbaher4/posts-app.V2/blob/main/Db%20Schema1.png?raw=true)
    * ~[!alt text](https://github.com/abdelrahmanbaher4/posts-app.V2/blob/main/Db%20Schema%202.png?raw=true)

