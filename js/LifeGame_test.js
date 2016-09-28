describe('initRandom', function(){
    it('should be a function', function(){
        assert.isFunction(initRandom);
    });
    it('should have one argument', function(){
        assert.equal(initRandom.length, 1);
    });
});

describe('draw', function(){
    it('should be a function', function(){
        assert.isFunction(initRandom);
    });
    it('should have no arguments', function(){
        assert.equal(draw.length, 0);
    });
});

describe('nextState', function(){
    it('should be a function', function(){
        assert.isFunction(initRandom);
    });
    it('should have no arguments', function(){
        assert.equal(nextState.length, 0);
    });
});

describe('countAroundCellNum', function(){
    it('should be a function', function(){
        assert.isFunction(initRandom);
    });
    it('should have two arguments', function(){
        assert.equal(countAroundCellNum.length, 2);
    });
});

describe('realPos', function(){
    it('should be a function', function(){
        assert.isFunction(initRandom);
    });
    it('should have one argument', function(){
        assert.equal(realPos.length, 1);
    });
    it('should return the right coordinate when the argument beyond the range', function(){
        var y = 50;
        assert.equal(realPos(y), 0);
    });
});

describe('refresh', function(){
    it('should be a function', function(){
        assert.isFunction(initRandom);
    });
    it('should have no arguments', function(){
        assert.equal(refresh.length, 0);
    });
});

describe('start', function(){
    it('should be a function', function(){
        assert.isFunction(initRandom);
    });
    it('should have no arguments', function(){
        assert.equal(start.length, 0);
    });
});