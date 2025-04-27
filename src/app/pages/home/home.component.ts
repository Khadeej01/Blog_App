import { Component, OnInit } from '@angular/core';
import { Post } from '../../core/services/post.service';
import { PostService } from '../../core/services/post.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  posts :Post []=[];

  constructor(private postService : PostService){}

  ngOnInit(): void {
    this.loadPosts();   // Chargement des posts au démarrage du composant
  }

  loadPosts():void{
    this.postService.getPosts().subscribe((posts)=>{
      this.posts = posts;
    })
  }

}
//HBJHG?NJB?NB