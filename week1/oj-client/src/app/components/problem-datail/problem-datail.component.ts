import { Component, OnInit, Inject } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-problem-datail',
  templateUrl: './problem-datail.component.html',
  styleUrls: ['./problem-datail.component.css']
})
export class ProblemDatailComponent implements OnInit {
  problem: Problem;
  constructor( private route: ActivatedRoute,
               @Inject('data') private data) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.problem = this.data.getProblem(+params['id']);
      // tslint:disable-next-line:no-unused-expression
    });
  }

}
