import { IPostInfo } from "@/app/types";
class PostsService {
  private static instance: PostsService;
  private pageSize = 5;
  private posts: IPostInfo[] = [
    {
      profileImg:
        "https://images.unsplash.com/photo-1692013832057-4503159ab8eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      authorName: "John Doe",
      productName: "BMW 20483 AM ELGOUNA",
      price: "230 AED",
      postId: 1,
      postImg:
        "https://images.unsplash.com/photo-1692013832057-4503159ab8eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      likesCount: 42,
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      price: "230 AED",
      productName: "BMW 20483 AM ELGOUNA",
      profileImg:
        "https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      authorName: "Jane Smith",
      postId: 2,
      postImg:
        "https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      likesCount: 78,
      postDescription: "Pellentesque nec lectus sed arcu.",
    },
    {
      price: "230 AED",
      productName: "BMW 20483 AM ELGOUNA",
      profileImg:
        "https://images.unsplash.com/photo-1682685796965-9814afcbff55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      authorName: "Alice Johnson",
      postId: 3,
      postImg:
        "https://images.unsplash.com/photo-1682685796965-9814afcbff55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      likesCount: 91,
      postDescription:
        "Vivamus congue turpis in augue convallis, non dignissim purus congue.",
    },
    {
      price: "230 AED",
      productName: "BMW 20483 AM ELGOUNA",
      profileImg:
        "https://images.unsplash.com/photo-1692198669686-0a3959951e11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      authorName: "David Brown",
      postId: 4,
      postImg:
        "https://images.unsplash.com/photo-1692198669686-0a3959951e11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      likesCount: 55,
      postDescription:
        "Aenean finibus turpis vitae nunc lacinia, in volutpat nisi ullamcorper.",
    },
    {
      price: "230 AED",
      productName: "BMW 20483 AM ELGOUNA",
      profileImg:
        "https://images.unsplash.com/photo-1682685796965-9814afcbff55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      authorName: "Olivia Taylor",
      postId: 5,
      postImg:
        "https://images.unsplash.com/photo-1682685796965-9814afcbff55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      likesCount: 63,
      postDescription:
        "Curabitur pharetra libero in risus volutpat, nec cursus sapien tristique.",
    },
    {
      price: "230 AED",
      productName: "BMW 20483 AM ELGOUNA",
      profileImg:
        "https://images.unsplash.com/photo-1692013832057-4503159ab8eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      authorName: "Sophia Martin",
      postId: 6,
      postImg:
        "https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      likesCount: 84,
      postDescription:
        "Fusce et arcu luctus, laoreet libero vel, efficitur ipsum.",
    },
    {
      price: "230 AED",
      productName: "BMW 20483 AM ELGOUNA",
      profileImg:
        "https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      authorName: "Jane Smith",
      postId: 7,
      postImg:
        "https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      likesCount: 84,
      postDescription:
        "Fusce et arcu luctus, laoreet libero vel, efficitur ipsum.",
    },
    {
      price: "230 AED",
      productName: "BMW 20483 AM ELGOUNA",
      profileImg:
        "https://images.unsplash.com/photo-1692013832057-4503159ab8eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      authorName: "Sophia Martin",
      postId: 8,
      postImg:
        "https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      likesCount: 84,
      postDescription:
        "Fusce et arcu luctus, laoreet libero vel, efficitur ipsum.",
    },
    {
      price: "230 AED",
      productName: "BMW 20483 AM ELGOUNA",
      profileImg:
        "https://images.unsplash.com/photo-1692013832057-4503159ab8eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      authorName: "Sophia Martin",
      postId: 9,
      postImg:
        "https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      likesCount: 84,
      postDescription:
        "Fusce et arcu luctus, laoreet libero vel, efficitur ipsum.",
    },
    {
      price: "230 AED",
      productName: "BMW 20483 AM ELGOUNA",
      profileImg:
        "https://images.unsplash.com/photo-1692013832057-4503159ab8eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      authorName: "Sophia Martin",
      postId: 10,
      postImg:
        "https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      likesCount: 84,
      postDescription:
        "Fusce et arcu luctus, laoreet libero vel, efficitur ipsum.",
    },
    {
      price: "230 AED",
      productName: "BMW 20483 AM ELGOUNA",
      profileImg:
        "https://images.unsplash.com/photo-1692013832057-4503159ab8eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      authorName: "Sophia Martin",
      postId: 11,
      postImg:
        "https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      likesCount: 84,
      postDescription:
        "Fusce et arcu luctus, laoreet libero vel, efficitur ipsum.",
    },
  ];
  private constructor() {}
  public static getInstance() {
    if (!this.instance) {
      this.instance = new PostsService();
    }
    return this.instance;
  }

  public getPosts(page: number) {
    const list = this.posts.slice(0, page * this.pageSize);
    return [list, list.length === this.posts.length];
  }

  public getPost(postId: string): IPostInfo {
    return this.posts.filter((post) => post.postId == Number(postId))[0];
  }
}

const postsService = PostsService.getInstance();

export default postsService;
