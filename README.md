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
- ![alt text](https://github.com/abdelrahmanbaher4/posts-application/blob/master/Screenshot%202023-08-20%20140555.png)

### Front-End Architecture

- I've tried as much as possible to divide the files and the components in a well-structured manner, for better reusability of the shared components and for making it easier to develop and maintain the code.

#### Application flowchart

![alt text](https://github.com/abdelrahmanbaher4/posts-application/blob/master/flowchart.png)

### flowChart and System Decription

#### State Management

- I've used the `Context` for the state management across the application to keep track of each post likes and to prevent props drilling , and the simple `useState` hook for in-component `state`.
- The context and `provider` are defined in the `providers` folder as `LikesProvider.tsx`.
- I have made it a `Client Component` to be able to use `hooks` as we can't use it inside of a `Server Component`
- I made 2 `interfaces` -> `ProviderProps` and `LikesContext`
- `storedLikes: Record<string,boolean` in the `LikesContext` interface it takes 2 values the first is the `postId` as `string` and the second `boolen` to detect if i reached the end of the `posts` object
  https://github.com/abdelrahmanbaher4/posts-application/blob/0ee7355406e671a19179878fc4ff68e860f1b264/app/providers/LikesProvider.tsx#L4-L11
- Defined the `createContext` and intialized it with ` storedLikes: {}` : that keeps track of the stored likes and `setStoredLikes: () => {}` to set the storedLikes
  https://github.com/abdelrahmanbaher4/posts-application/blob/0ee7355406e671a19179878fc4ff68e860f1b264/app/providers/LikesProvider.tsx#L13-L17
- Wrapping the children inside of the `LikesContextProvider` that takes `{StoredLikes,setStoredLikes` to make it avaliable for all it`s children
  https://github.com/abdelrahmanbaher4/posts-application/blob/0ee7355406e671a19179878fc4ff68e860f1b264/app/providers/LikesProvider.tsx#L18-L43
- I made a custom hook called `useLikes` to not to import the `context` and `useContext` hook everywhere.
  https://github.com/abdelrahmanbaher4/posts-application/blob/0ee7355406e671a19179878fc4ff68e860f1b264/app/providers/LikesProvider.tsx#L45-L47

#### Types

- I created an `interface` for the `PostInfo` that contains type for each post and then i export it to be able to use it in the `PostsService` and to pass it as a `prop` to the `Post` component
  https://github.com/abdelrahmanbaher4/posts-application/blob/b5a84d930b538b512853fa3780f8d2e1dd7a2285/app/types/post.interface.ts#L1-L10
- I tried to make `index.ts` for everything i want to `export` to make it easier to `import` in the `import` string
  https://github.com/abdelrahmanbaher4/posts-application/blob/63ddf4bd9b3b21ae137dc84afe1b83bea13ad8c7/app/types/index.ts#L1C1-L1C33

#### Components , Services & Pages

#### Components

- The app consists of 2 reusable components `Post` and `navbar` and are defined in the components folder

  - `Navbar` Component and it is a `serverComponent` , it is responsive and the `Navbar` goes to the bottom of the page in the mobile resolution.
    https://github.com/abdelrahmanbaher4/posts-application/blob/0ee7355406e671a19179878fc4ff68e860f1b264/app/components/navbar/index.tsx#L1-L19

  - `Post` component and it is a `ClientComponent` to be able to use `hooks` inside it
    - It takes 2 `props` , the `post:PostInfo` itself of type `PostInfo` for the interface we created earlier and `Liked` as a `boolean` to trace if the post liked
    - The `useLikes()` custom hook it used as `useContext` to be able to access the `LikesContext` and we update it using `setStoredLikes()` method
    - And the `likeChanged` function tp keep track of the post , so if the user like it it will be store in the `localStorage` , if he clicked again and it was liked , it is then removed from the `localStorage`
      https://github.com/abdelrahmanbaher4/posts-application/blob/0ee7355406e671a19179878fc4ff68e860f1b264/app/components/post/post.tsx#L1-L65

#### Services

- I tried to archetict my code to simulate having a backend and implement a `PostsService` that gets me data from the backend , so when the user click on get started in the main page , it redirects the user to `/posts` page , where it talks to the `PostsService` to get all the data of the posts as follows
- `PostsService` is implemented using `Singleton` design pattern , where i make sure i limit the number of instance i create the only one Instance , by making the constructor of the class as `private`
  ```javascript
  https://github.com/abdelrahmanbaher4/posts-application/blob/63ddf4bd9b3b21ae137dc84afe1b83bea13ad8c7/app/services/posts/index.ts#L1-L169

  - `PostsService` is responsible for getting all posts through `getPosts()` method , and it retrives the data Paginated as it retreive 5 posts only and this is achived using the `slice` method ,where it takes the page number and multiply it by the `pageSize` to know the count for the `slice`, and the `pageSize` is increased by one in the `/posts` page, whenever the user clicks `load more` and always make sure that it didn't exceed the posts `lenght` by this condition `list.length === this.posts.length`
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

- we have 2 routes `/posts` and `/favorites` and they are grouped under the `(pages)` as they have the same `styling` , so I am groupinh them and giving them same styles in `layout.tsx`
- `layout.tsx` , consists of the 2 components `Post` & `Navbar`
  https://github.com/abdelrahmanbaher4/posts-application/blob/63ddf4bd9b3b21ae137dc84afe1b83bea13ad8c7/app/(pages)/layout.tsx#L1-L13

- `/poages` route , It uses the global state for `storedLikes` to know the `storedLikes` Posts and display them with the like icon `filled with red` if liked , it keeps track of the liked posts even if you restarted the application , as it is saved in the `localStorage`
  https://github.com/abdelrahmanbaher4/posts-application/blob/63ddf4bd9b3b21ae137dc84afe1b83bea13ad8c7/app/(pages)/posts/page.tsx#L1-L49
- for styles i always use `styles.modules.css` to avoid clashes of the classNames

### Back-End Architecture
