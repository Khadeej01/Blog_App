import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: any | null = null;
  errorMessage: string | null = null;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.postService.getPost(id).subscribe({
        next: (post) => {
          this.post = post;
        },
        error: (err) => {
          this.errorMessage = 'Erreur lors du chargement de l\'article : ' + (err.message || 'Erreur inconnue');
        }
      });
    } else {
      this.errorMessage = 'ID de l\'article non fourni.';
    }
  }
}