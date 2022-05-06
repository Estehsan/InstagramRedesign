/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      comment
      postID
      userID
      User {
        id
        Name
        email
        image
        website
        bio
        noOfPosts
        noOfFolowers
        noOfFollowings
        username
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        description
        image
        images
        video
        noOfComments
        noOfLikes
        untitledfield
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      comment
      postID
      userID
      User {
        id
        Name
        email
        image
        website
        bio
        noOfPosts
        noOfFolowers
        noOfFollowings
        username
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        description
        image
        images
        video
        noOfComments
        noOfLikes
        untitledfield
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      comment
      postID
      userID
      User {
        id
        Name
        email
        image
        website
        bio
        noOfPosts
        noOfFolowers
        noOfFollowings
        username
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        description
        image
        images
        video
        noOfComments
        noOfLikes
        untitledfield
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      description
      image
      images
      video
      noOfComments
      noOfLikes
      untitledfield
      userID
      User {
        id
        Name
        email
        image
        website
        bio
        noOfPosts
        noOfFolowers
        noOfFollowings
        username
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Likes {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      description
      image
      images
      video
      noOfComments
      noOfLikes
      untitledfield
      userID
      User {
        id
        Name
        email
        image
        website
        bio
        noOfPosts
        noOfFolowers
        noOfFollowings
        username
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Likes {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      description
      image
      images
      video
      noOfComments
      noOfLikes
      untitledfield
      userID
      User {
        id
        Name
        email
        image
        website
        bio
        noOfPosts
        noOfFolowers
        noOfFollowings
        username
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Likes {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateLikes = /* GraphQL */ `
  subscription OnCreateLikes {
    onCreateLikes {
      id
      postID
      userID
      User {
        id
        Name
        email
        image
        website
        bio
        noOfPosts
        noOfFolowers
        noOfFollowings
        username
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        description
        image
        images
        video
        noOfComments
        noOfLikes
        untitledfield
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateLikes = /* GraphQL */ `
  subscription OnUpdateLikes {
    onUpdateLikes {
      id
      postID
      userID
      User {
        id
        Name
        email
        image
        website
        bio
        noOfPosts
        noOfFolowers
        noOfFollowings
        username
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        description
        image
        images
        video
        noOfComments
        noOfLikes
        untitledfield
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteLikes = /* GraphQL */ `
  subscription OnDeleteLikes {
    onDeleteLikes {
      id
      postID
      userID
      User {
        id
        Name
        email
        image
        website
        bio
        noOfPosts
        noOfFolowers
        noOfFollowings
        username
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        description
        image
        images
        video
        noOfComments
        noOfLikes
        untitledfield
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      Name
      email
      image
      website
      bio
      noOfPosts
      noOfFolowers
      noOfFollowings
      username
      Posts {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      Likes {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      Name
      email
      image
      website
      bio
      noOfPosts
      noOfFolowers
      noOfFollowings
      username
      Posts {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      Likes {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      Name
      email
      image
      website
      bio
      noOfPosts
      noOfFolowers
      noOfFollowings
      username
      Posts {
        nextToken
        startedAt
      }
      Comments {
        nextToken
        startedAt
      }
      Likes {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
