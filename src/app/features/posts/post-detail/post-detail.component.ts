import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NgIf } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.postService.getPost(id).subscribe(post => {
        this.post = post;
      });
    }
  }
}