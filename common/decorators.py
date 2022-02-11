from django.http import HttpResponseBadRequest

from .helpers import is_ajax


def ajax_required(f):
    def wrap(request, *args, **kwargs):
        if not is_ajax(request):
            return HttpResponseBadRequest()
        return f(request, *args, **kwargs)
    wrap.__doc__ = f.__doc__
    wrap.__name__ = f.__name__
    return wrap
