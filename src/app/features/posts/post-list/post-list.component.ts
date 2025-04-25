import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Post } from '../../../core/services/post.service';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  errorMessage: string | null = null; // Add error message property

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data)=>{
      this.posts = data;
    });
  }


  onDelete(id: number): void {
    if (confirm("Es-tu sûr de vouloir supprimer cet article ?")) {
      this.postService.deletePost(id).subscribe(() => {
        this.posts = this.posts.filter(post => post.id !== id);
      });
    }
  }
  


}