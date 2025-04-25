import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { PostService } from '../../../core/services/post.service';
import { CommonModule} from '@angular/common';
import { NgModel } from '@angular/forms';

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
    this.postService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des articles : ' + (err.message || 'Erreur inconnue');
      }
    });
  }

  deletePost(id : number): void{
    this.postService.deletePost(id).subscribe(()=>{
      this.posts = this.posts.filter(post => post.id !== id );
    });
  }
}