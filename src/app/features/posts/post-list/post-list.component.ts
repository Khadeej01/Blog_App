import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
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
    this.postService.getPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des articles : ' + (err.message || 'Erreur inconnue');
      }
    });
  }
}